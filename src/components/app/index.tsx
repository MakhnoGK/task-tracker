import React from 'react'
import '../../main.scss'
import Typography from '../common/typography'
import Card from '../common/card'
import Button from '../common/button'
import { ButtonSize, ButtonVariant } from '../common/button/button.types'
import { AiFillAccountBook } from 'react-icons/all'

const App: React.FC = () => (
  <>
    <Card stretch>
      <Typography size="m">React app</Typography>
      <Typography size="m" semiBold>React app</Typography>
      <Typography size="l">React app</Typography>
      <Typography size="l" semiBold>React app</Typography>
      <Button label="Button 1"/>
      <Button label="Button 1" variant={ButtonVariant.Secondary}/>
      <Button label="Button 1" size={ButtonSize.Large}/>
      <Button label="Button 1" size={ButtonSize.Large} variant={ButtonVariant.Secondary}/>
      <Button label="Button 1" size={ButtonSize.Large} loading/>
      <Button label="Button 1" size={ButtonSize.Large} variant={ButtonVariant.Secondary} loading/>
      <Button icon={<AiFillAccountBook />} />
      <div style={{background: 'blue'}}>
        <Button icon={<AiFillAccountBook />} transparent />
      </div>
    </Card>
  </>
)

export default App
