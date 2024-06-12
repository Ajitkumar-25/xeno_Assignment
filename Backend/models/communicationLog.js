const mongoose = require("mongoose");

const communicationLogSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["SENT", "FAILED"],
  },
  sentAt: {
    type: Date,
    required: true,
  },
});

const CommunicationLog = mongoose.model(
  "CommunicationLog",
  communicationLogSchema
);
module.exports = CommunicationLog;
