use warp::Filter;

use log::info;

#[tokio::main]
async fn main() {
    pretty_env_logger::init();

    let hello = warp::path("helloworld").and(warp::path::end()).map(|| {
        info!("Hello World request recieved.");
        "Hello World"
    });

    warp::serve(hello).run(([127, 0, 0, 1], 3030)).await;
}
