import { Button, Layout, Sidebar } from 'design-library';


function App() {
  return (
    <Layout
      header={<div>App Header</div>}
      sidebar={
        <Sidebar
          header={<h3>Project Alpha</h3>}
          footer={<button>Logout</button>}
        >
          {/* Children go into the Nav slot automatically */}
          <ul>
            <li>Dashboard</li>
            <li>Analytics</li>
          </ul>
        </Sidebar>
      }
    >
      <Button></Button>
    </Layout>
  )
}

export default App;