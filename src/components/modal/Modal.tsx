import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type PageType = {
    show: boolean,
    close: any,
    size: string | undefined

    children: JSX.Element
}

export const Modal = ({ show, close, size, children }: PageType) => {

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={close}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                <Dialog.Panel className={`w-full ${size ? size : 'max-w-modal'} transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all`}>

                  {children}

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>

        </Dialog>
      </Transition>
    </>
  )
}

Modal.defaultProps = {
  size: undefined
}