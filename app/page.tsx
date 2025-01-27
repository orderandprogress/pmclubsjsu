'use client'
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  Briefcase,
  Instagram,
  Linkedin,
  Calendar,
  Mail,
  Send,
} from "lucide-react"
import { Discord } from "@/components/ui/icons/discord"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 rounded-full border border-gray-800 bg-[#111111]/80 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/60">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center h-14">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white%20logo-Da6sEDvZfx817Qvpktqm7j2S2DxVnb.png"
              alt="PM Club Logo"
              width={144}
              height={35}
              className="object-contain ml-2"
            />
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-6 -ml-4">
            <Link
              href="#events"
              className="text-xs sm:text-sm text-white transition-colors hover:text-gray-200"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Events
            </Link>
            <Link
              href="#about"
              className="text-xs sm:text-sm text-white transition-colors hover:text-gray-200"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              About Us
            </Link>
            <Link
              href="#footer"
              className="text-xs sm:text-sm text-white transition-colors hover:text-gray-200"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact
            </Link>
            <Link
              href="#join"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-100 h-9 px-3 text-xs sm:text-sm"
            >
              Join Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tower%20hall-xcMsaF7tWxvSv9f2wJZtC11v4cx7SC.png')] bg-cover bg-center bg-no-repeat md:bg-fixed">
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-[850px] relative z-10">
            <div className="w-full bg-[rgb(17,17,17)]/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:py-8 md:px-8 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-8 w-full max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-center leading-tight">
                  <span className="whitespace-nowrap">Product Management</span>
                  <br />
                  <span className="whitespace-nowrap">Club at SJSU</span>
                </h1>

                <div className="w-full">
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center leading-relaxed">
                    PM Club accelerates students' path to succeeding in the job market with opportunities to network,
                    learn, and gain hands-on experience.
                  </p>
                </div>

                <Link
                  href="#join"
                  onClick={() => document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-100 h-9 px-3 text-xs sm:text-sm"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto mt-8 grid max-w-5xl gap-8 px-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-8">
                <CheckCircle2 className="h-12 w-12 text-blue-400" />
                <h3 className="mt-6 text-xl font-bold text-white">Success</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Achieve your career goals with our comprehensive resources and support.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-8">
                <BookOpen className="h-12 w-12 text-green-400" />
                <h3 className="mt-6 text-xl font-bold text-white">Learn</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Master industry techniques, methodologies, and cutting-edge tech.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-8">
                <Briefcase className="h-12 w-12 text-purple-400" />
                <h3 className="mt-6 text-xl font-bold text-white">Experience</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Gain hands-on, resume-worthy project experience to stand out.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-zinc-900 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold sm:text-5xl text-white mb-8">Upcoming Events</h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <Card className="bg-black border-gray-900">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Calendar className="h-12 w-12 text-yellow-400 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Coming Soon</h3>
                    <p className="mt-2 text-gray-400">Coming Soon</p>
                    <p className="mt-4 text-sm text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold sm:text-5xl text-white mb-8">About Us</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-4 px-4 grid-cols-2 lg:grid-cols-3">
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0412.JPG-w3DRK5V1Su1Y5PncMQZQCOhPVVIu6O.jpeg"
                    alt="Gabriel Castaneda"
                    width={400}
                    height={400}
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Gabriel Castaneda</h3>
                    <p className="text-xs sm:text-sm text-gray-400">President</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/gmcast/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Business, Operations and SCM @ SJSU. Growth & Marketing @ CollegeBot. Passionate about products, AI,
                  space exploration, and startups.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nic%20pic.jpg-nQuxiWRPARjH0qjy5bvcDEEcGy4VM3.jpeg"
                    alt="Nicolaus Hilleary"
                    width={400}
                    height={400}
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Nicolaus Hilleary</h3>
                    <p className="text-xs sm:text-sm text-gray-400">President</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/nicolaushilleary/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Business, Entrepreneurship @ SJSU. Growth & Marketing @ CollegeBot. Passionate about product
                  management and entrepreneurship.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3352.jpg-vu18lhmpr5CcVdLTMhQrSGpVaqiDG1.jpeg"
                    alt="Shreya Madaan"
                    width={400}
                    height={400}
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Shreya Madaan</h3>
                    <p className="text-xs sm:text-sm text-gray-400">VP of Outreach</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/shreya-madaan-20/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Engineering Management Grad @ SJSU. Dedicated to fostering connections and organizing impactful events
                  with a passion for product management and community building.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me.jpg-NQ0qZ5SK2mAIJNYaIKq8ird6wt2EQA.jpeg"
                    alt="Ashley Irawan"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Ashley Irawan</h3>
                    <p className="text-xs sm:text-sm text-gray-400">VP of Outreach</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/ashley-irawan-software-engineer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Artificial Intelligence @ SJSU. Passionate in building transparent AI systems and entrepreneurship
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sai-N3w4Dd23txdZe3iazDJFzOBWnRNJmY.png"
                    alt="Sai Krishna Mittapalli"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Sai Krishna Mittapalli</h3>
                    <p className="text-xs sm:text-sm text-gray-400">VP of Strategy</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/saikrmit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Management Information Systems @SJSU. VP @IDEAS SJSU. Passionate about launching ventures from 0 to
                  100. Aspiring Project Manager.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blessy-ixj5ButIcV4BCwy4bzMY4bEshbhrnH.png"
                    alt="Blessy Del Carpio"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Blessy Del Carpio</h3>
                    <p className="text-xs sm:text-sm text-gray-400">VP of Analytics</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/blessy-del-carpio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Business, MIS @ SJSU. Marketing @ IDEAS Club. Passionate about Project Management and Business
                  Analysis.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/christian-TKqZchl0ipA7XZl7qLGyuFCIuPtC5C.png"
                    alt="Christian Yun"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Christian Yun</h3>
                    <p className="text-xs sm:text-sm text-gray-400">VP of Education</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/christianyun/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Business, Analytics @ SJSU. building consumer social, enjoy reading game theory and papers on
                  behavior!
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6215%202.jpg-Ob6BTg71MptLyWWopkv7LTsiRZO71h.jpeg"
                    alt="Glerys Gonzalez"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Glerys Gonzalez</h3>
                    <p className="text-xs sm:text-sm text-gray-400">VP of Career Development</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/glerys-gonzalez/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Business, Accounting @ SJSU. Marketing @ CollegeBot. Lead Consultant @ RCC. Passionate about finance,
                  entrepreneurship, and tech.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[rgb(23,23,23)] border-zinc-900">
              <CardContent className="p-3 sm:p-6">
                <div className="aspect-square overflow-hidden rounded-full bg-gray-700">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4fa7262e-1038-4338-aac9-e7fb13eb1dc6.JPG-JR6nkzFJZ4Cuapk4ndTnguPU9kfBXz.jpeg"
                    alt="Muhammad Hamza"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">Muhammad Hamza</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Student Advisor/Consultant</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/muhammad-hamza3401/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-500">
                  Bachelors MIS @ SJSU. IT Support Assitant and Recruiter @ HCSS Healthcare. Sponsor Outreach
                  Coordinator @ IDEAS Club
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="bg-zinc-900 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold sm:text-5xl text-white mb-6">Ready to Accelerate Your Career?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 mb-12">
              Add our socials to connect with fellow product managers at SJSU and start your journey with PM Club.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://discord.gg/Wh3Nn5nu6r"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] p-4 rounded-lg hover:bg-[#4752C4] transition-colors"
              >
                <Discord className="h-8 w-8 text-white" />
                <span className="sr-only">Join our Discord</span>
              </a>
              <a
                href="https://www.instagram.com/pmclubsjsu/profilecard/?igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E4405F] p-4 rounded-lg hover:bg-[#D63A54] transition-colors"
              >
                <Instagram className="h-8 w-8 text-white" />
                <span className="sr-only">Follow us on Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/pmclubsjsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] p-4 rounded-lg hover:bg-[#0958A5] transition-colors"
              >
                <Linkedin className="h-8 w-8 text-white" />
                <span className="sr-only">Connect with us on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-black border-t border-gray-800 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-gray-400 mb-6">
              Reach out to us at{" "}
              <a href="mailto:outreach@pmclubsjsu.com" className="text-blue-400 hover:underline">
                outreach@pmclubsjsu.com
              </a>
            </p>
            <p className="mt-8 text-gray-400">&copy; {new Date().getFullYear()} PM Club SJSU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

