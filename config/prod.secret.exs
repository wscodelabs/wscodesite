use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or you later on).
#production
#dasdasd
config :wscodelabs, Wscodelabs.Endpoint,
  secret_key_base: "dNcinXzDQA2qD5zIoNR2f11Kc/6OnPgluMYlIyiBFDJ7y6c7W/8iRLAZIzsOjMVD"

# Configure your database
config :wscodelabs, Wscodelabs.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "wscodelabs_prod",
  pool_size: 20
