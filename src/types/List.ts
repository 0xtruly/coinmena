import React from 'react'

export interface ListType {
    children?: React.ReactElement[]
    display: string
    width: string
}

export interface RepoType {
    builtBy: []
    description: string
    forks: string
    language: string
    languageColor: string
    rank: number
    repositoryName: string
    since: string
    starsSince: string
    totalStars: string
    url: string
    username: string
}

interface Repo {
    description: string
    repositoryName: string
    url: string
}
export interface DevType {
    avatar: string
    name: string
    popularRepository: Repo
    rank: number
    since: string
    url: string
    username: string
}