import Bar from "../../components/Bar"
import { langauges, tools } from "../../data"

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education and experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>
              Computer Science
            </h5>
            <p className='font-semibold'>
              SMS Aga Khan School (2021 - 2023)
            </p>
            <p className='my-3'>
              I am currently preparing for my Matric Exams in Computer Science from Aga Khan School
            </p>
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>
              Freelance Developer
            </h5>
            <p className='font-semibold'>Fiverr, Upwork</p>
            <p className='my-3'>Skilled in front-end dev, Shopify stores, and diverse projects.</p>
          </div>
        </div>
      </div>
      {/* languages and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Skills</h5>
          <div className="my-2">
            {
              langauges.map(language => <Bar data={language} key={language.name} />)
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {
              tools.map(tool => <Bar data={tool} key={tool.name} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default resume