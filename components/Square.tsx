interface ISquare {
    color: boolean
    children: React.ReactNode
}

export default function Square ({ color, children }: ISquare) {
    const fill = color ? '#3F6212' : '#F1F5F9'
    const stroke = color ? '#F1F5F9': '#3F6212'
    return (
        <div style={{backgroundColor: fill, color: stroke, width: '100%', height: '100%'}} className="flex items-center justify-center text-xs">
            {children}
        </div>
    )
}
