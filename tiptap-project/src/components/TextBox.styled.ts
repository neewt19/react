import styled from 'styled-components'
import { EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'

export const Editorcontent = styled(EditorContent)`
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    border: 2px solid black;
    border-radius: 8px;
    padding: 20px;
    width: 80%;
    .ProseMirror {
        outline: none;
        width: 100%;
        code {
            font-family: 'JetBrainsMono', monospace;
            background-color: #d5d5d5;
            color: #616161;
            border-radius: 4px;
        }
        pre {
            background: #0D0D0D;
            color: #FFF;
            font-family: 'JetBrainsMono', monospace;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;

            code {
                color: inherit;
                padding: 0;
                background: none;
                font-size: 0.8rem;
            }
        }
        h1, h2, h3 {
            font-family: 'JetBrainsMono', monospace;
        }
    }
`
export const BubleMenu = styled(BubbleMenu)`
    font-family: '__Inter_546912', '__Inter_Fallback_546912';
    display: flex;
    background-color: #0D0D0D;
    padding: 0.2rem;
    border-radius: 0.5rem;

    button {
    border: none;
    background: none;
    color: #FFF;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

        &:hover,
        &.is-active {
        opacity: 1;
        }
    }
`
export const FloatingMenub = styled(FloatingMenu)`
    display: flex;
    background-color: #0D0D0D10;
    padding: 0.2rem;
    border-radius: 0.5rem;

    button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

        &:hover,
        &.is-active {
        opacity: 1;
        }
    }

`
export const Container = styled.div`
    color: white;
    button {
        border: 2px solid black;
        background-color: white;
        color: black;
        font-size: 0.85rem;
        font-weight: 500;
        margin: 5px;
        border-radius: 3px;
    }
`
export const Buttons = styled.button`
    background-color: gray;
    color: black;
    border: none;
`
export const CharacterCount = styled.div`
  color: #868e96;
  margin-top: 1rem;
`