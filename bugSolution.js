```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/" prefetch={false}>
        <a className="no-prefetch">Home</a>
      </Link>
      <Link href="/about" prefetch={false}>
        <a className="no-prefetch">About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```