import CompanionForm from "@/components/companionForm"

const NewCompanion = () => {
  return (
    <main className="min-lg_w-1/3 minmd:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm/>
      </article>
    </main>
  )
}

export default NewCompanion