"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Triangle } from "react-loader-spinner";

export default function Page() {
  const Router = useRouter();
  // On mount, check if user is authenticated
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:5000/dashboard", { credentials: "include" })
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/login");
        } else {
          const text = await res.text();
          const match = text.match(/Welcome, (.*)!/);
          setUsername(match ? match[1] : "");
          // Ensures spinner shows for AT LEAST 1 second
          setTimeout(() => setLoading(false), 1000);
        }
      })
      .catch(() => {
        router.push("/login");
      });
  }, [router]);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <Triangle color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset"/>
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
