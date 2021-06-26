use warp::Filter;

#[tokio::main]
async fn main() {
    pretty_env_logger::init();

    let default_route = warp::get().and(warp::fs::dir("../client/build"));

    let api_route = warp::path("api").and(warp::path("v1"));

    let api_hello_route = api_route.and(warp::path("hello").map(|| "World"));

    let routes = warp::any().and(default_route.or(api_hello_route));

    warp::serve(routes).run(([0, 0, 0, 0], 3030)).await;
}
