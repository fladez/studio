
"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { getUsers, type UserProfile } from "@/data/users";
import { updateUserRole, toggleUserBlockStatus } from "./actions";

// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Icons
import { Loader2, UserCog, Ban, ShieldCheck, Users } from "lucide-react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const SUPERADMIN_EMAILS = ['canalfladez@gmail.com', 'rcorreas@gmail.com'];

export default function InscritosPage() {
  const { toast } = useToast();
  const { userProfile: currentUserProfile } = useAuth();
  const [userList, setUserList] = useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    setIsLoading(true);
    const users = await getUsers();
    setUserList(users);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId: string, newRole: 'user' | 'admin' | 'superadmin') => {
    const result = await updateUserRole(userId, newRole);
    if (result.success) {
      toast({
        title: "Sucesso!",
        description: result.message,
      });
      fetchUsers();
    } else {
      toast({
        title: "Erro ao Atualizar",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  const handleBlockToggle = async (userId: string, isBlocked: boolean) => {
    const result = await toggleUserBlockStatus(userId, isBlocked);
    if (result.success) {
        toast({
            title: "Sucesso!",
            description: result.message,
        });
        fetchUsers();
    } else {
        toast({
            title: "Erro ao Atualizar",
            description: result.message,
            variant: "destructive",
        });
    }
  }
  
  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'superadmin':
        return 'destructive';
      case 'admin':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const superAdmins = userList.filter(user => user.email && SUPERADMIN_EMAILS.includes(user.email));
  const otherUsers = userList.filter(user => !user.email || !SUPERADMIN_EMAILS.includes(user.email));

  const renderUserTable = (users: UserProfile[], isSuperAdminList: boolean) => {
    return (
       <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuário</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Perfil</TableHead>
              <TableHead>Data de Criação</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              const canBeModified = currentUserProfile?.role === 'superadmin' && !isSuperAdminList;
              return (
                <TableRow key={user.id} className={user.isBlocked ? 'bg-muted/50' : ''}>
                  <TableCell className="font-medium max-w-xs truncate">
                    {user.firstName || user.username || 'Não definido'}
                    {user.isBlocked && <Badge variant="destructive" className="ml-2">Bloqueado</Badge>}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={getRoleBadgeVariant(user.role)}>{user.role === 'superadmin' ? 'Super-Admin' : user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    {user.createdAt ? format(user.createdAt, "dd/MM/yyyy", { locale: ptBR }) : 'N/A'}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                      <AlertDialog>
                          <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="icon" title="Gerenciar Perfil" disabled={!canBeModified}>
                                  <UserCog className="h-4 w-4" />
                              </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                              <AlertDialogHeader>
                                  <AlertDialogTitle>Alterar Perfil de {user.firstName || user.email}</AlertDialogTitle>
                                  <AlertDialogDescription>
                                  Selecione o novo perfil para este usuário.
                                  </AlertDialogDescription>
                              </AlertDialogHeader>
                              <Select onValueChange={(value: 'user' | 'admin' | 'superadmin') => handleRoleChange(user.id, value)} defaultValue={user.role}>
                                  <SelectTrigger>
                                      <SelectValue placeholder="Selecione um perfil" />
                                  </SelectTrigger>
                                  <SelectContent>
                                      <SelectItem value="user">Usuário</SelectItem>
                                      <SelectItem value="admin">Administrador</SelectItem>
                                      {currentUserProfile?.role === 'superadmin' && (
                                          <SelectItem value="superadmin">Super-Admin</SelectItem>
                                      )}
                                  </SelectContent>
                              </Select>
                              <AlertDialogFooter>
                                  <AlertDialogCancel>Fechar</AlertDialogCancel>
                              </AlertDialogFooter>
                          </AlertDialogContent>
                      </AlertDialog>

                      <AlertDialog>
                          <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="icon" title={user.isBlocked ? "Desbloquear Usuário" : "Bloquear Usuário"} disabled={!canBeModified}>
                                  <Ban className={`h-4 w-4 ${user.isBlocked ? 'text-green-500' : 'text-destructive'}`} />
                              </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                              <AlertDialogHeader>
                                  <AlertDialogTitle>Confirmar {user.isBlocked ? "Desbloqueio" : "Bloqueio"}</AlertDialogTitle>
                                  <AlertDialogDescription>
                                      Você tem certeza que deseja {user.isBlocked ? "desbloquear" : "bloquear"} este usuário? {user.isBlocked ? 'Ele poderá fazer login novamente.' : 'Ele não poderá mais fazer login.'}
                                  </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                  <AlertDialogAction 
                                      className={!user.isBlocked ? "bg-destructive hover:bg-destructive/90" : ""}
                                      onClick={() => handleBlockToggle(user.id, user.isBlocked || false)}
                                  >
                                      {user.isBlocked ? "Desbloquear" : "Bloquear"}
                                  </AlertDialogAction>
                              </AlertDialogFooter>
                          </AlertDialogContent>
                      </AlertDialog>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                        Administradores Nativos
                    </CardTitle>
                    <CardDescription>
                        Usuários com acesso total. Não podem ser modificados.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {superAdmins.length > 0 ? renderUserTable(superAdmins, true) : (
                        <p className="text-center text-muted-foreground py-8">Nenhum administrador nativo encontrado.</p>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <Users className="h-6 w-6 text-primary" />
                        Inscritos
                    </CardTitle>
                    <CardDescription>
                        Gerencie os perfis e permissões dos demais usuários cadastrados.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {otherUsers.length > 0 ? renderUserTable(otherUsers, false) : (
                        <p className="text-center text-muted-foreground py-8">Nenhum outro usuário inscrito ainda.</p>
                    )}
                </CardContent>
            </Card>
        </>
      )}
    </div>
  );
}
