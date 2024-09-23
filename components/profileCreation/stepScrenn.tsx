'use client'

import { useEffect, useState } from 'react'
import { supabaseSession } from '@/supabase/supabaseSession'
import Step1 from './Step1'
import Step2 from './Step2'

export default function StepScrenn() {
  const { session } = supabaseSession()

  return (
    <div className="space-y-10">
      <div className="flex">
        <div className="w-52 border bg-green-600 p-1">
          <p className="text-center text-base font-bold text-textBlack">
            Etape 1
          </p>
        </div>
        <div className="w-52 border bg-white p-1">
          <p className="text-center text-base font-bold text-textBlack">
            Etape 2
          </p>
        </div>
        <div className="w-52 border bg-white p-1">
          <p className="text-center text-base font-bold text-textBlack">
            Etape 3
          </p>
        </div>
        <div className="w-52 border bg-white p-1">
          <p className="text-center text-base font-bold text-textBlack">
            Etape 4
          </p>
        </div>
      </div>
      <Step1 />
      <Step2/>
    </div>
  )
}
