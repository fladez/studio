'use client'

import React from 'react'
import { useToast } from "@/hooks/use-toast"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Share2, Instagram } from 'lucide-react'

export function ArticleShareButton({ title, slug }: { title: string, slug: string }) {
    const { toast } = useToast()
    
    const handleCopyLink = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        const url = `${window.location.origin}/noticias/${slug}`
        navigator.clipboard.writeText(url).then(() => {
            toast({
                title: "Link Copiado!",
                description: "O link da notícia foi copiado para a sua área de transferência.",
            })
        }).catch(err => {
            console.error('Failed to copy: ', err)
            toast({
                title: "Erro",
                description: "Não foi possível copiar o link.",
                variant: "destructive"
            })
        })
    }

    const handleShare = (e: React.MouseEvent, platform: 'twitter' | 'facebook' | 'linkedin' | 'instagram') => {
        e.preventDefault()
        e.stopPropagation()
        const url = `${window.location.origin}/noticias/${slug}`
        let shareUrl = ''
        switch(platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
                break
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
                break
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`
                break
            case 'instagram':
                navigator.clipboard.writeText(url).then(() => {
                    toast({
                        title: "Link Copiado!",
                        description: "Para compartilhar no Instagram, cole o link no seu story ou na bio.",
                    });
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                    toast({
                        title: "Erro",
                        description: "Não foi possível copiar o link.",
                        variant: "destructive"
                    });
                });
                return;
        }
        window.open(shareUrl, '_blank', 'noopener,noreferrer')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartilhar
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                 <DropdownMenuItem onClick={(e) => handleShare(e, 'twitter')}>
                    <Twitter className="mr-2 h-4 w-4" />
                    <span>Twitter / X</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => handleShare(e, 'facebook')}>
                    <Facebook className="mr-2 h-4 w-4" />
                    <span>Facebook</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => handleShare(e, 'instagram')}>
                    <Instagram className="mr-2 h-4 w-4" />
                    <span>Instagram</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => handleShare(e, 'linkedin')}>
                    <Linkedin className="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopyLink}>
                    <LinkIcon className="mr-2 h-4 w-4" />
                    <span>Copiar Link</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
