import { BlogFeaturedPost } from '@/components/BlogFeaturedPost'
import { BlogTopPosts } from '@/components/BlogTopPosts'
import { IntegrationsFeed } from '@/components/IntegrationsFeed'
import { IntegrationsSearch } from '@/components/IntegrationsSearch'
import { Post } from '@/components/Post/Post'
import { Spinner } from '@/components/Spinner'

export default function Test() {
  return (
    <div className="m-auto max-w-[1200px] space-y-10">
      <BlogTopPosts />
      <IntegrationsFeed />
    </div>
  )
}
