import AboutClient from './AboutClient';
import { getDynamicContent } from '@/lib/data';

export default async function About() {
    const content = await getDynamicContent();
    return <AboutClient content={content} />;
}
