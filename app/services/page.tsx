import ServicesClient from './ServicesClient';
import { getDynamicContent } from '@/lib/data';

export default async function ServicesPage() {
    const content = await getDynamicContent();
    return <ServicesClient content={content} />;
}
