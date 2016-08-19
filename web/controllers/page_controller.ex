defmodule Wscodelabs.PageController do
  use Wscodelabs.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
