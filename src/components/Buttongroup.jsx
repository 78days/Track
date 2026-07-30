import Button from "./Button"

const Buttongroup = () => {
  return (
    <section className="button-group">
      <Button text='Mark all as complete' type='secondary' />
      <Button text='Mark all incomplete' type='secondary'/>
      <Button text=' Reset'  type='secondary'/>
      <Button text='remove all items' type='secondary'/>
      </section>
  )
}

export default Buttongroup
