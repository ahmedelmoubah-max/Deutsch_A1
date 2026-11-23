-- Personal self-competition: private challenge sessions and best-score records.
-- Run this once in Supabase SQL Editor before deploying the updated Edge Function.

create table if not exists public.competition_self_challenges (
  id uuid primary key default gen_random_uuid(),
  uid text not null,
  challenge_key text not null,
  lesson_indices integer[] not null default '{}',
  lesson_names text[] not null default '{}',
  test_types jsonb not null default '{}'::jsonb,
  whole_exercises boolean not null default false,
  question_count integer not null default 0,
  questions jsonb not null default '[]'::jsonb,
  correct_indices integer[] not null default '{}',
  previous_best_score integer not null default 0,
  score integer not null default 0,
  correct_count integer not null default 0,
  answered_count integer not null default 0,
  status text not null default 'active' check (status in ('active', 'completed', 'abandoned')),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists competition_self_challenges_uid_created_idx
  on public.competition_self_challenges (uid, created_at desc);

create table if not exists public.competition_personal_records (
  uid text not null,
  challenge_key text not null,
  lesson_indices integer[] not null default '{}',
  lesson_names text[] not null default '{}',
  test_types jsonb not null default '{}'::jsonb,
  whole_exercises boolean not null default false,
  question_count integer not null default 0,
  best_score integer not null default 0,
  best_correct_count integer not null default 0,
  total_questions integer not null default 0,
  attempts integer not null default 0,
  last_score integer not null default 0,
  last_correct_count integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (uid, challenge_key)
);

create index if not exists competition_personal_records_uid_updated_idx
  on public.competition_personal_records (uid, updated_at desc);

-- Only the Edge Function's service-role client can access these tables.
alter table public.competition_self_challenges enable row level security;
alter table public.competition_personal_records enable row level security;

revoke all on public.competition_self_challenges from anon, authenticated;
revoke all on public.competition_personal_records from anon, authenticated;
grant all on public.competition_self_challenges to service_role;
grant all on public.competition_personal_records to service_role;
