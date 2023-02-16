import { Card } from './components/Cart';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <h1>Ola Mundo</h1>
      <Card
        id={1}
        paragraph='TypeScript'
        details='Ts fullstack'
      />
      <Card
        id={2}
        paragraph='HTML'
        details='Front'
      />
      <Card
        id={3}
        paragraph='SQL'
        details='Back'
      />
    </Layout>
  )
}

export default App;
