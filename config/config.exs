# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :wscodelabs,
  ecto_repos: [Wscodelabs.Repo]

# Configures the endpoint
config :wscodelabs, Wscodelabs.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "9Z5Lk10x7ncOnt8lxxlLJsx54TwH3RNC5HokT/dOGpf7yiVfXdQa666qH4yoANne",
  render_errors: [view: Wscodelabs.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Wscodelabs.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
