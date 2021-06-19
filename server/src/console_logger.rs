use crate::logger::LogMessage;
use crate::logger::Logger;
use chrono::Utc;

pub struct ConsoleLogger {}

impl Logger for ConsoleLogger {
    fn log(&self, log_message: LogMessage) {
        let now = Utc::now();
        let now = now.to_rfc3339();
        match log_message {
            LogMessage::Standard(message) => {
                println!("[{}]: {}", now, message);
            }
            LogMessage::Warning(message) => {
                println!("[{}]: ***{}***", now, message);
            }
            LogMessage::Critical(message) => {
                println!("XXX\nXXX\n[{}]: {}\nXXX\nXXX", now, message);
            }
        }
    }
}

impl ConsoleLogger {
    pub fn new() -> ConsoleLogger {
        ConsoleLogger {}
    }
}
