import ContactClient from './ContactClient';
import { getDynamicContent } from '@/lib/data';

export default async function ContactPage() {
    const content = await getDynamicContent();
    return <ContactClient content={content} />;
}
