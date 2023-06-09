import { BlogFeaturedPost } from '@/components/BlogFeaturedPost'
import { BlogSearch } from '@/components/BlogSearch'
import { BlogTopPosts } from '@/components/BlogTopPosts'
import { Form } from '@/components/Form'
import { InlineForm } from '@/components/InlineForm'
import { Input } from '@/components/Input'
import { IntegrationsFeed } from '@/components/IntegrationsFeed'
import { IntegrationsSearch } from '@/components/IntegrationsSearch'
import { Post } from '@/components/Post/Post'
import { Spinner } from '@/components/Spinner'

export default function Test() {
  return (
    <div className="m-auto max-w-[1200px] space-y-10 p-5">
      <IntegrationsSearch />
      <BlogSearch />
      <BlogTopPosts />
      <IntegrationsFeed />
      <Input placeholder="Email" />
      <Form />
    </div>
  )
}
