export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      CaughtViolators: {
        Row: {
          address: string
          civil_status: Database["public"]["Enums"]["Civil_status"]
          created_at: string
          date_of_birth: string
          first_name: string
          id: string
          institution: string
          last_name: string
          middle_name: string
          sex: Database["public"]["Enums"]["Sex"]
        }
        Insert: {
          address: string
          civil_status: Database["public"]["Enums"]["Civil_status"]
          created_at: string
          date_of_birth: string
          first_name: string
          id: string
          institution: string
          last_name: string
          middle_name: string
          sex: Database["public"]["Enums"]["Sex"]
        }
        Update: {
          address?: string
          civil_status?: Database["public"]["Enums"]["Civil_status"]
          created_at?: string
          date_of_birth?: string
          first_name?: string
          id?: string
          institution?: string
          last_name?: string
          middle_name?: string
          sex?: Database["public"]["Enums"]["Sex"]
        }
        Relationships: []
      }
      Roles: {
        Row: {
          id: string
          role_name: string
          user_id: string | null
        }
        Insert: {
          id?: string
          role_name: string
          user_id?: string | null
        }
        Update: {
          id?: string
          role_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      Violations: {
        Row: {
          apprehender_name: string
          apprehender_type: Database["public"]["Enums"]["Apprehendor_type"]
          created_at: string
          id: string
          OR_number: number
          paid: boolean
          violation_date: string
          violation_place: string
          violator_id: string
          violator_type: Database["public"]["Enums"]["Violator_type"]
        }
        Insert: {
          apprehender_name: string
          apprehender_type: Database["public"]["Enums"]["Apprehendor_type"]
          created_at: string
          id: string
          OR_number: number
          paid?: boolean
          violation_date: string
          violation_place: string
          violator_id?: string
          violator_type: Database["public"]["Enums"]["Violator_type"]
        }
        Update: {
          apprehender_name?: string
          apprehender_type?: Database["public"]["Enums"]["Apprehendor_type"]
          created_at?: string
          id?: string
          OR_number?: number
          paid?: boolean
          violation_date?: string
          violation_place?: string
          violator_id?: string
          violator_type?: Database["public"]["Enums"]["Violator_type"]
        }
        Relationships: [
          {
            foreignKeyName: "Violations_violator_id_fkey"
            columns: ["violator_id"]
            isOneToOne: false
            referencedRelation: "CaughtViolators"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Apprehendor_type: "Officer" | "Agent"
      Civil_status: "Single" | "Married"
      Sex: "Male" | "Female"
      Violator_type: "Student" | "Civilian"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
