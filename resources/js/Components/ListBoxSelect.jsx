import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from 'clsx';

export default function ListBoxSelect({labelTitle,optionsData, selected, onChangeSelected}){
    return(
        <Field>
            <Label>{labelTitle}</Label>
            <Listbox value={selected} onChange={onChangeSelected}>
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

                    {optionsData.length ? (
                        optionsData.map((item) => (
                            <ListboxOption
                                key={item.id}
                                value={item}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                >
                                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                                <div className="text-sm/6 text-white">{item.label}</div>
                            </ListboxOption>
                        ))
                    ):( 
                            <ListboxOption
                                key={new Date().getTime()}
                                value={{ id:'',label:'',kategori:'',value:'' }}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                >
                                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                                <div className="text-sm/6 text-white text-[10px]">Pilih dulu sebelumnya</div>
                            </ListboxOption>
                        )
                    }
                </ListboxOptions>
            </Listbox>
        </Field>
    )
}