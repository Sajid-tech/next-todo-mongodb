import { model, models, Schema } from "mongoose";

const ShareSchema = new Schema({
    title: { type: String, required: true },
    selectedItems: [{ type: String, required: true }],
    userName: { type: String, required: true },
    description: { type: String, required: true },
    isImportant: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    completedAt: { type: Date, required: true },

})




const Share = models.Share || model("Share", ShareSchema)

export default Share