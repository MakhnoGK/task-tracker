import React from 'react'
import '../../main.scss'
import Typography from '../common/typography'
import Card from '../common/card'

const App: React.FC = () => (
  <>
    <Card stretch>
      <Typography size="m">React app</Typography>
      <Typography size="m" semiBold>React app</Typography>
      <Typography size="l">React app</Typography>
      <Typography size="l" semiBold>React app</Typography>
    </Card>
  </>
);

export default App
