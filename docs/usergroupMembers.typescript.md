# `usergroupMembers` Submodule <a name="`usergroupMembers` Submodule" id="@skeptools/provider-slack.usergroupMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UsergroupMembers <a name="UsergroupMembers" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members slack_usergroup_members}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer"></a>

```typescript
import { usergroupMembers } from '@skeptools/provider-slack'

new usergroupMembers.UsergroupMembers(scope: Construct, id: string, config: UsergroupMembersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig">UsergroupMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig">UsergroupMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct"></a>

```typescript
import { usergroupMembers } from '@skeptools/provider-slack'

usergroupMembers.UsergroupMembers.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupIdInput">usergroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupId">usergroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `usergroupIdInput`<sup>Optional</sup> <a name="usergroupIdInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupIdInput"></a>

```typescript
public readonly usergroupIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupId"></a>

```typescript
public readonly usergroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UsergroupMembersConfig <a name="UsergroupMembersConfig" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.Initializer"></a>

```typescript
import { usergroupMembers } from '@skeptools/provider-slack'

const usergroupMembersConfig: usergroupMembers.UsergroupMembersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.usergroupId">usergroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}.

---

##### `usergroupId`<sup>Required</sup> <a name="usergroupId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.usergroupId"></a>

```typescript
public readonly usergroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



