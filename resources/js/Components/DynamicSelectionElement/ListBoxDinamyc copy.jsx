import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
]

export default function ListBoxDinamyc({
        labelTitle,
        parentHandle,
        optionsData,
    } ) {
        const [selected, setSelected] = useState(optionsData[0]);       
    
    function handleSelected(selectItem){
        setSelected(selectItem)
        // parentHandle(selected);
        console.log('handleSelected in ListBox', selectItem);
        parentHandle(selected)
    }
    return (
        <Field>
            <Label>{labelTitle}</Label>
            <Listbox value={selected} onChange={handleSelected}>
                <ListboxButton
                className={clsx(
                    'relative block w-40 border rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-black',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
                >
                {selected.label}
                <ChevronDownIcon
                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
                    aria-hidden="true"
                />
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                        'w-[var(--button-width)] rounded-xl border border-white/5 bg-sky-800 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                        'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                    )}
                    >
                    {optionsData.map((item) => (
                        <ListboxOption
                            key={item.id}
                            value={item}
                            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            >
                            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                            <div className="text-sm/6 text-white">{item.label}</div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </Field>
        
    )
}