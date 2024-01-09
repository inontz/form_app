import FormsApp from '@/components/forms-app'
import { Boundary } from '@/components/boundary';

export default async function Home() {

  return (

    <Boundary labels={['Register']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <FormsApp />
      </div>
    </Boundary>

  )
}
