import Link from 'next/link';

function Base() {
  return (
    <div>
      Click{' '}
      <Link href="/about" replace>
        <a>here</a>
      </Link>{' '}
      to read more 

      <Link href="/post?slug=something" as="/post/something"><a>aaaa</a></Link>

      <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
         <a> here</a>
      </Link>
    </div>
  );
}

export default Base;