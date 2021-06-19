mod console_logger;
mod logger;
mod server;

use console_logger::ConsoleLogger;
use server::server;

fn main() {
    let logger = Box::new(ConsoleLogger::new());
    server(logger);
}
