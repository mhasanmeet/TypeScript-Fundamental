import Image from 'next/image'
import Child from '@/components/02-children-props/Child'
import Parent from '@/components/02-children-props/Parent'
import SecondChild from '@/components/02-children-props/SecondChild'
import PostList from '@/components/01-props/PostList'
import Event from '@/components/03-event/page'
import UseState from '@/components/04-useState/page'

export default function Home() {
  return (
    // React TypeScript Props
    // <PostList/>


    // React TypeScript multilayer props
    // <Parent>
    //   <Child/>
    //   <SecondChild/>
    // </Parent>


    // Event
    // <Event/>


    // useState
    <UseState/>

  )
}
