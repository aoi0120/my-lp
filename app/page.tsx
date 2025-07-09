import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Calendar,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Firebase", "Supabase"] },
    { category: "DevOps", items: ["Linux", "Docker", "Apache", "AWS"] },
    { category: "Tools", items: ["Git", "Github", "CLI", "Figma", "Adobe"] },
    { category: "Mobile", items: ["SwiftUI"] },
  ]

  const projects = [
    {
      title: "ブランド収集サイト",
      description: "ReactとNode.jsを使用したフルスタックの商品をランダムで表示するサイト",
      tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "Supabase"],
      github: "https://github.com/aoi0120/BrandSite",
      demo: "https://www.youtube.com/watch?v=iyqIZOGS7dQ",
      image: "/brandSite.png",
    },
    {
      title: "食費判断",
      description: "大学生の食費を大まかに管理するiOSアプリ",
      tech: ["SwiftUI"],
      github: "https://github.com/aoi0120/FoodExpensesHelper",
      docs: "https://www.canva.com/design/DAGspg-I_Ks/o9i8x4iQo9TrPrB3Ag_LOQ/edit?utm_content=DAGspg-I_Ks&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      image: "/Eatjudge.png",
    },
    {
      title: "ご褒美ポケット（開発中）",
      description: "PMとして開発中のプロジェクト。バグやコードレビュー、バックエンド設計担当",
      tech: ["React", "JavaScript", "Node.js", "Express", "Prisma", "Supabase", "Vercel"],
      github: "https://github.com/ctrl-Yc/Ctrl-Y",
      image: "/team.png",
    },
  ]

  const experience = [
    {
      company: "特定非営利活動法人NxTEND",
      position: "関西事業部",
      period: "2025年6月 - 現在",
      description:
        "関西事業部のメンバーとして、ITイベントや勉強会の企画・運営を担当。",
    },
    {
      company: "JANOG NOC JANOG56",
      position: "APチーム",
      period: "2025年6月 - 現在",
      description:
        "APの設定と運用を担当。",
    },
    {
      company: "株式会社ハートビーツ",
      position: "インターンシップ",
      period: "2024年9月 - 10月",
      description:
        "AWSを使用したLAMP環境の構築。Webサイトのアラート検知した際の障害対応",
    },
    {
      company: "JANOG NOC AXIES2024",
      position: "サーバーチーム",
      period: "2024年11月 - 2024年12月",
      description:
        "サクラのVPSを使用したサーバー構築。DHCPの設定と運用を担当。",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center mx-auto">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Portfolio</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="container py-24 md:py-32 mx-auto" >
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <Image
              src="/face.png"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full border-4 border-primary/20 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">小林 碧唯</h1>
            <p className="text-xl text-muted-foreground">フルスタックエンジニア</p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              React、Node.js で Web を作り、SwiftUI で iOS アプリをリリース。
              ハッカソンや JANOG NOC に参加してネットワーク運用まで体験し、フロント〜インフラを横断する学生エンジニアです。
              PM としてデザイナー・エンジニアの橋渡しも担当し、シンプルで迷わない UI と壊れにくいサービスづくりに挑戦中。
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                お問い合わせ
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/aoi0120" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section >

      {/* Skills Section */}
      <section id="skills" className="container py-24 mx-auto" >
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">スキル</h2>
            <p className="text-muted-foreground">これまでに習得した技術スタックと専門分野</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {skillGroup.category === "Frontend" && <Globe className="h-5 w-5" />}
                    {skillGroup.category === "Backend" && <Database className="h-5 w-5" />}
                    {skillGroup.category === "Tools" && <Code className="h-5 w-5" />}
                    {skillGroup.category === "Mobile" && <Smartphone className="h-5 w-5" />}
                    <span>{skillGroup.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section >

      {/* Projects Section */}
      < section id="projects" className="container py-24 mx-auto" >
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">プロジェクト</h2>
            <p className="text-muted-foreground">これまでに手がけた主要なプロジェクトの一部をご紹介します</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {/* <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button> */}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {project.docs && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.docs} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Docs
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ section >

      {/* Experience Section */}
      < section id="experience" className="container py-24 mx-auto" >
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">経歴</h2>
            <p className="text-muted-foreground">これまでの職歴と主な業務内容</p>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle>{exp.position}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="mr-2 h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ section >

      {/* Contact Section */}
      <section id="contact" className="container py-24 mx-auto" >
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">お問い合わせ</h2>
            <p className="text-muted-foreground">プロジェクトのご相談やお仕事のご依頼はお気軽にご連絡ください</p>
          </div>
          <div className="mx-auto max-w-md space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>oosabaaoi@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>大阪府, 日本</span>
                  </div>
                  <Separator />
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://github.com/aoi0120" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="mailto:oosabaaoi@gmail.com">
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 mx-auto" >
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 小林碧唯. All rights reserved.
            </p>
          </div>
        </div>
      </footer >
    </div >
  )
}
