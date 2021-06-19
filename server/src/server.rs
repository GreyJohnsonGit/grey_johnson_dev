use crate::logger::LogMessage;
use crate::logger::Logger;

use std::net::TcpListener;

pub fn server(logger: Box<dyn Logger>) {
    let port = 8080;
    let protocol = "http://";
    let address = format!("localhost:{}", port);

    let listener = match TcpListener::bind(&address) {
        Ok(listener) => {
            logger.log(LogMessage::Informational(format!(
                "Server started on {}{}",
                protocol, address
            )));
            listener
        }
        Err(_) => {
            logger.log(LogMessage::Critical(format!(
                "Failed to bind to port {}",
                port
            )));
            return;
        }
    };

    for connection in listener.incoming() {
        match connection {
            Ok(_) => {
                logger.log(LogMessage::Informational(
                    "Connection Receieved".to_string(),
                ));
            }
            Err(_) => {
                logger.log(LogMessage::Warning("Failed to connect".to_string()));
            }
        }
    }
}
