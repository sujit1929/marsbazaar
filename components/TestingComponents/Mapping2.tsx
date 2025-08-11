'use client';
import fetchMapping2 from "@/Services/Mappping/Mapping2"
import { useQuery } from "@tanstack/react-query"

export default function Mapping2() {

    const { data: MappingData2, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fetchMapping2
    })

    console.log("MappingData2", MappingData2)
    return (
        <>
            {MappingData2?.schedule?.week}
            {MappingData2?.schedule?.days?.map((sched: any, index: number) => {
                console.log("Schedule:", sched);
                return (
                    <div key={index}>
                        <h2>{sched.date}</h2>
                        <ul>
                            {sched.events.map((event: any) => (
                                <li key={event.time}>
                                    <span>{event.time}</span> - <span>{event.title}</span> at <span>{event.location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}

        </>
    )
}
