export interface ButtonType {
    width: string
    height: string
    color: string
    bordered: boolean
    iconName?: string
    text: string
    withIcon?: boolean
    onClick?: () => void
    type?: string
    style?: object
    link?: string
}