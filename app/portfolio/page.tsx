import PortfolioClient from './PortfolioClient';
import { getDynamicContent } from '@/lib/data';

export default async function PortfolioPage() {
    const content = await getDynamicContent();
    return <PortfolioClient content={content} />;
}
