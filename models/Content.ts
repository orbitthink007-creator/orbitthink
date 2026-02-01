import mongoose, { Schema, Document, Model } from 'mongoose';

// Flexible schema to allow for dynamic changes without strict validation for every field,
// since the structure matches content.ts but might evolve.
// Using 'any' for nested objects to simplify for this singleton config use case,
// but we can be more specific if needed. 
// For a "CMS" style config, Mixed/loose schema is often preferred for flexibility.

const ContentSchema = new Schema({
    navbar: { type: Schema.Types.Mixed },
    hero: { type: Schema.Types.Mixed },
    services: { type: Schema.Types.Mixed },
    portfolio: { type: Schema.Types.Mixed },
    about: { type: Schema.Types.Mixed },
    servicesPage: { type: Schema.Types.Mixed },
    contactPage: { type: Schema.Types.Mixed },
    footer: { type: Schema.Types.Mixed },
    // Timestamp for when it was last updated
    lastUpdated: { type: Date, default: Date.now }
}, { strict: false }); // Allow other fields if added later

export interface IContent extends Document {
    navbar: any;
    hero: any;
    services: any;
    portfolio: any;
    about: any;
    servicesPage: any;
    contactPage: any;
    footer: any;
    lastUpdated: Date;
}

// Check if model exists to prevent overwrite error in dev hot reload
const Content: Model<IContent> = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);

export default Content;
