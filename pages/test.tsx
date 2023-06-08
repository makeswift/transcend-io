import { IntegrationsFeed } from '@/components/IntegrationsFeed'
import { IntegrationsSearch } from '@/components/IntegrationsSearch'
import { Spinner } from '@/components/Spinner'

export default function Test() {
  return (
    <div className="m-auto max-w-[1200px]">
      <IntegrationsSearch />
      <IntegrationsFeed />
    </div>
  )
}
