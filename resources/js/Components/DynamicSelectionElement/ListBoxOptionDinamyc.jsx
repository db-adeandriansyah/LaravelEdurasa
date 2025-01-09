import { ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from 'clsx';

export default function ListBoxOptionDinamyc({optionsData, valueSelected, onChangeSelected}){
    return(
        
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
    )
}