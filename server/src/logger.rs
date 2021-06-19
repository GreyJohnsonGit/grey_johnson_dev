pub enum LogMessage {
    Informational(String),
    Warning(String),
    Critical(String),
}

pub trait Logger {
    fn log(&self, log_message: LogMessage);
}
