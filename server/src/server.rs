use crate::logger::LogMessage;
use crate::logger::Logger;

pub fn server(logger: Box<dyn Logger>) {
    logger.log(LogMessage::Standard("Gello!".to_string()));
    logger.log(LogMessage::Warning("Gello!".to_string()));
    logger.log(LogMessage::Critical("Gello!".to_string()));
}
