import FormGroup from '../FormGroup'
import { Form } from './style'

import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

export default function ContactForm () {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome"/>
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email"/>
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone"/>
      </FormGroup>

       <FormGroup>
        <Select>
          <option value="123">Instagram</option>
        </Select>
      </FormGroup>
      <Button type="submit">Salvar alterações</Button>
    </Form>
  )
}
