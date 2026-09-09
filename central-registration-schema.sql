-- SkillUp Central Registration — backend schema
-- Intended for a managed PostgreSQL/Supabase-style backend.
-- Do NOT store plaintext passwords. Authentication should be handled by the provider.

create table if not exists public.skillup_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  mobile text,
  student_class text,
  target text default 'NEET UG',
  target_year integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.skillup_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  topic text not null,
  answered integer not null default 0,
  correct integer not null default 0,
  xp integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, subject, topic)
);

alter table public.skillup_profiles enable row level security;
alter table public.skillup_progress enable row level security;

create policy "Users can read own profile"
  on public.skillup_profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.skillup_profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.skillup_profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Users can read own progress"
  on public.skillup_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.skillup_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.skillup_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
