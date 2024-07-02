import { Fragment } from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const materialTypes = [
  {
    materialName: 'Product Information',
    materialId: 1,
    materials: [
      {
        id: 1,
        href: '#',
        fileName: 'ProductOverview.pdf',
        fileSize: '6MB',
        expl: "A detailed product overview"
      },
      {
        id: 2,
        href: '#',
        fileName: 'financeDemo.mp4',
        fileSize: '6MB',
        expl: "A demo of the finance capabilities"
      },
      {
        id: 3,
        href: '#',
        fileName: 'demo4.jpg',
        fileSize: '6MB',
        expl: "A detailed product overview"
      },
    ],
  },
  {
    materialName: 'Sales Tools',
    materialId: 2,
    materials: [
      {
        id: 4,
        href: '#',
        fileName: 'financials.pdf',
        fileSize: '6MB',
        expl: "A detailed product overview"
      },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function salesMaterials() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-lg font-MessinaSans leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
          Sales Materials
        </h2>
      </div>
      <div className="mt-6 overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Amount</th>
                  
                  <th>More details</th>
                </tr>
              </thead>
              <tbody>
                {materialTypes.map((materialType) => (
                  <Fragment key={materialType.materialId}>
                    <tr className="text-sm leading-6 text-gray-900">
                      <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                        {materialType.materialName}
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                      </th>
                    </tr>
                    {materialType.materials.map((material) => (
                      <tr key={material.id}>
                        <td className="relative py- pr-6">
                          <div className="flex gap-x-6">
                            <div className="flex-auto">
                              <div className="flex items-start mt-1 gap-x-3">
                                <div className="text-sm font-medium leading-6 text-gray-900">{material.fileName}</div>
                              </div>
                              <div className="flex justify-center">
                                <div className="text-sm font-MessinaSans leading-6 text-gray-500">{material.expl}</div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="py-2 text-right">
                          <a className="flex justify-end">
                            <button>
                                <ArrowDownTrayIcon className='h-5'/>
                            </button>
                          
                          </a>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
